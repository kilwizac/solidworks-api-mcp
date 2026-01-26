---
type: property
interface: ISplineParamData
member: LayerOverride
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.Layer
keywords:
  - layeroverride
  - isplineparamdata
  - spline
  - param
  - data
  - layer
  - override
  - int32
  - bcurve
  - points
  - vb
  - net
  - vba
  - parameterization
  - parameters
readonly: true
---

# ISplineParamData.LayerOverride

Gets the spline's properties that override the default properties of the layer.

## Signature

```csharp
System.Int32 LayerOverride {get;}
```
## Parameters

None.

## Return Value

Properties that have been overridden or should be overridden as defined in swLayerOverride_e (see Remarks )

## Remarks

Layers are only supported in drawing documents.
Splines can be created on a layer that has specific visual properties. By default, the spline takes on the visual properties defined by the layer. However, for a specific spline, these visual properties can be overridden (see
ISplineParamData::Color
,
ISplineParamData::LineStyle
, and
ISplineParamData::LineWidth
). This
property gets or sets whether the default visual properties of the layer are used by this spline.
When the spline is not on any layer, the value this property returns is undefined. You can use the
ISplineParamData::Layer
property to determine the name of the layer, if any, that this spline is on. If an empty string is returned by the ISplineParamData::Layer property, then this property is not used.
When you get this property, the returned bit value indicates which property or properties have been overridden. The bit indicators are:
color = 0x1
style = 0x2
width = 0x4
Therefore, if the value was returned as 3, you know color and style have been specifically set for this item and might not match the default values associated with this item's layer.
When you set this property, the input bit value indicates which property or properties should maintain their current override values. Therefore, if the value is passed as 0x4, we know width should keep its current override value, and that color and style should be reset to use the color and style settings for the item's layer. If you pass 0, all visual properties are reset to use the default settings of the item's layer.

## Examples

- Get BCurve Spline Points (C#) (Get_BCurve_Spline_Points_Example_CSharp.htm)
- Get BCurve Spline Points (VB.NET) (Get_BCurve_Spline_Points_Example_VBNET.htm)
- Get BCurve Spline Points (VBA) (Get_BCurve_Spline_Points_Example_VB.htm)
- Get P-Spline Parameterization Data (C#) (Get_P-Spline_Parameterization_Data_Example_CSharp.htm)
- Get P-Spline Parameterization Data (VB.NET) (Get_P-Spline_Parameterization_Data_Example_VBNET.htm)
- Get P-Spline Parameterization Data (VBA) (Get_P-Spline_Parameterization_Data_Example_VB.htm)
- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISplineParamData.Layer`