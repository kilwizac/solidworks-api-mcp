---
type: method
interface: IDisplayDimension
member: IsDimXpert
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.IsDimXpert
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - dimxpert
  - isdimxpert
  - dimension
  - dim
  - xpert
  - boolean
  - feature
  - vb
  - net
  - vba
---

# IDisplayDimension.IsDimXpert

Obsolete. Superseded by IAnnotation::IsDimXpert.

## Signature

```csharp
System.Boolean IsDimXpert()
```
## Parameters

None.

## Return Value

True if the display dimension is a DimXpert dimension, false if not

## Remarks

Use this method to determine if the display dimension is a DimXpert display dimension. If it is, then use
IAnnotation::GetDimXpertFeature
to access the DimXpert feature, which provides access to the display dimension information.
DimXpert dimensions can be hidden shown or hidden as a group, which can be important when exporting to a DXF/DWG file.

## Examples

- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IAnnotation.IsDimXpert`