---
type: method
interface: IAnnotation
member: GetDimXpertFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IDisplayDimension.IsDimXpert
keywords:
  - annotation
  - see
  - also
  - iannotation
  - dimxpert
  - annotations
  - dimensions
  - display
  - idisplaydimension
  - getdimxpertfeature
  - dim
  - xpert
  - feature
  - object
  - vb
  - net
  - vba
---

# IAnnotation.GetDimXpertFeature

Gets the DimXpert feature associated with this annotation.

## Signature

```csharp
System.Object GetDimXpertFeature()
```
## Parameters

None.

## Return Value

DimXpert feature

## Remarks

If an annotation is a display dimension, then use
IAnnotation::IsDimXpert
to determine if it is a DimXpert annotation. If it is, then use IAnnotation::GetDimXpertFeature to access the DimXpert feature, which provides access to the display dimension information.

## Examples

- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IDisplayDimension.IsDimXpert`