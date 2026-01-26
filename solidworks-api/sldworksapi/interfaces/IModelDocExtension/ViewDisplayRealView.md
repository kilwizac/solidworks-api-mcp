---
type: property
interface: IModelDocExtension
member: ViewDisplayRealView
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IMaterialVisualPropertiesData.RealView
keywords:
  - viewdisplayrealview
  - imodeldocextension
  - model
  - doc
  - extension
  - view
  - display
  - real
  - boolean
  - appearance
  - file
  - name
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.ViewDisplayRealView

Gets or sets the RealView Graphics setting.

## Signature

```csharp
System.Boolean ViewDisplayRealView {get; set;}
```
## Parameters

None.

## Return Value

True if RealView Graphics is set, false if not

## Remarks

When you
apply a material to a part
, use RealView Graphics to display the model with realistic-looking materials. RealView Graphics is available with supported graphics cards only. See the SOLIDWORKS Help for details.

## Examples

- Get Appearance File Name (C#) (Get_Appearance_Filename_Example_CSharp.htm)
- Get Appearance File Name (VB.NET) (Get_Appearance_Filename_Example_VBNET.htm)
- Get Appearance File Name (VBA) (Get_Appearance_Filename_Example_VB.htm)

## See Also

- `IMaterialVisualPropertiesData.RealView`