---
type: method
interface: IModelView
member: ISetStereoSeparation
returns: System.Boolean
parameters:
  -
    name: DfSeparation
    type: System.Double
    description: Array of 2 doubles representing the stereo magnitude and stereo parallax balance settings
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - isetstereoseparation
  - imodelview
  - model
  - view
  - stereo
  - separation
  - df
  - double
  - boolean
---

# IModelView.ISetStereoSeparation

Obsolete and not superseded. Functionality no longer implemented.

## Signature

```csharp
System.Boolean ISetStereoSeparation( 
   ref System.Double
DfSeparation
)
```
## Parameters

- `DfSeparation` (System.Double): Array of 2 doubles representing the stereo magnitude and stereo parallax balance settings

## Return Value

True if changing the stereo-value settings is successful, false if not

## Remarks

This method only affects the model view's display if:
Display window was set up to display stereoscopically
Application is currently set to display stereoscopically.
ISldWorks::EnableStereoDisplay
needs to be called to do these things.
There are two stereoscopic display values this method sets.
Settings[0] controls the magnitude of the stereoscopic effect by specifying the stereoscopic, virtual, camera separation. Appropriate values for this setting depend on the scale of the object, the distance from the virtual camera to the object center, the perspective field of view angle, and, perhaps, an adjustment factor that is available to the user.
Settings[1] controls the asymmetry of the projection frustums, thus, adjusting the parallax balance of the stereoscopic scene. It is desirable for any stereoscopic scene to comfortably balance the use of negative parallax (elements appearing to float in front of the display surface) and positive parallax (elements appearing to reside somewhere behind the display surface). Appropriate values for this setting should be arrived at experimentally.
If this method is not called, the default settings will equal 0.0, resulting in identical left-eye and right-eye renderings, and no visible stereo effect, even if stereoscopic display is currently enabled.