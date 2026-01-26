---
type: method
interface: IAnnotation
member: IsDimXpert
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetDimXpertFeature
keywords:
  - annotation
  - see
  - also
  - iannotation
  - dimxpert
  - annotations
  - isdimxpert
  - dim
  - xpert
  - boolean
  - display
  - dimensions
  - feature
  - vb
  - net
  - vba
---

# IAnnotation.IsDimXpert

Gets whether the annotation is a DimXpert annotation.

## Signature

```csharp
System.Boolean IsDimXpert()
```
## Parameters

None.

## Return Value

True if the annotation is a DimXpert annotation, false if not

## Remarks

Use this method to determine if the annotation is a DimXpert display dimension. If it is, then use
IAnnotation::GetDimXpertFeature
to access the DimXpert feature, which provides access to the display dimension information.
DimXpert annotations such as datums and GTols can be hidden, shown, or hidden as a group, which can be important when exporting to a DXF/DWG file.

## Examples

- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IAnnotation.GetDimXpertFeature`