import ExpoModulesCore
import SiroSDK

public class SiroReactNativeModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('SiroReactNative')` in JavaScript.
    Name("SiroReactNative")



    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
   View(SiroButton.self) {
     // Defines a setter for the `name` prop.
     Prop("name") { (view: SiroButton, prop: String) in
       print(prop)
     }
   }


    Function("setup") { (environment: String) in
    
        
        guard let environmentEnum = SKEnvironment(rawValue: environment) else {
            print("Invalid Enviornment set. Please use either staging or production")
            return
        }
        SiroSDK.setup(environment: environmentEnum)
    }

    Function("sendEvent") { (eventName: String, leadData: [String: Any]?) in
        DispatchQueue.main.async {
            SiroSDK.sendEvent(eventName, interactionData: nil)
        }
    }

    Function("hide") {
        DispatchQueue.main.async {
            SiroSDK.hide()
        }
    }
      
    Function("showModal") {
      DispatchQueue.main.async {
        SiroSDK.show()
      }
    }
  }
}
