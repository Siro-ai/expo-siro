import ExpoModulesCore
import SiroSDK
import SwiftUI
import UIKit

class SiroButton: ExpoView {
	let button = SiroSDKButton()
    var hostingController: UIHostingController<SiroSDKButton>?


	required init(appContext: AppContext? = nil) {
		super.init(appContext: appContext)

        hostingController = UIHostingController(rootView: button)
              guard let buttonView = hostingController?.view else { return }
              addSubview(buttonView)
    
	}
   
   public func onPress() {
       print("Button Pressed!")
   }

}
