---
type: property
interface: IMaterialVisualPropertiesData
member: RealView
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelDocExtension.ViewDisplayRealView
keywords:
  - realview
  - graphics
  - standard
  - imaterialvisualpropertiesdata
  - material
  - visual
  - properties
  - data
  - real
  - view
  - boolean
readonly: null
---

# IMaterialVisualPropertiesData.RealView

Gets or sets whether textures are displayed in RealView or Standard graphics.

## Signature

```csharp
System.Boolean RealView {get; set;}
```
## Parameters

None.

## Return Value

True if textures are RealView graphics, false if Standard graphics

## Remarks

IMaterialVisualPropertiesData::AdvancedGraphics
must be True to set this property.

## Examples

- IMaterialVisualPropertiesData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMaterialVisualPropertiesData)

## See Also

- `IModelDocExtension.ViewDisplayRealView`