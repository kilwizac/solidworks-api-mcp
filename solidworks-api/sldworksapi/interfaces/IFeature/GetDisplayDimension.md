---
type: method
interface: IFeature
member: GetDisplayDimension
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Pattern property as defined by swFeatureDimensionParameter_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IFeature.EnumDisplayDimensions
  - IFeature.GetFirstDisplayDimension
  - IFeature.GetNextDisplayDimension
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - feature
  - getdisplaydimension
  - ifeature
  - dimension
  - index
  - int32
  - object
  - pattern
  - vba
  - vb
  - net
---

# IFeature.GetDisplayDimension

Gets the display dimension object for the specified pattern property.

## Signature

```csharp
System.Object GetDisplayDimension( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Pattern property as defined by swFeatureDimensionParameter_e

## Return Value

IDisplayDimension

## Examples

- Get Pattern Display Dimension (VBA) (Get_Pattern_Display_Dimension_Example_VB.htm)
- Get Pattern Display Dimension (VB.NET) (Get_Pattern_Display_Dimension_Example_VBNET.htm)
- Get Pattern Display Dimension (C#) (Get_Pattern_Display_Dimension_Example_CSharp.htm)

## See Also

- `IFeature.EnumDisplayDimensions`
- `IFeature.GetFirstDisplayDimension`
- `IFeature.GetNextDisplayDimension`