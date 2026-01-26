---
type: method
interface: IModelDoc2
member: GetFeatureCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - number
  - getfeaturecount
  - imodeldoc2
  - model
  - doc2
  - count
  - int32
  - traverse
  - features
  - reverse
  - position
  - vb
  - net
  - vba
  - order
---

# IModelDoc2.GetFeatureCount

Gets the number of features in this document.

## Signature

```csharp
System.Int32 GetFeatureCount()
```
## Parameters

None.

## Return Value

Number of features in this document; this number does not include subfeatures

## Remarks

The number of features returned by this method does
not include subfeatures. Subfeatures include, for example, mate features within a mategroup, drawing views on a sheet, and so on. One way to identify a subfeature is whether it can be returned by:
IFeature::GetFirstSubFeature
or
IFeature::IGetFirstSubFeature
IFeature::GetNextSubFeature
or
IFeature::IGetNextSubFeature
.
This method returns the number of features returned when traversing the Feature list with
IModelDoc2::FirstFeature
or
IModelDoc2::IFirstFeature
and
IFeature::GetNextFeature
or
IFeature::IGetNextFeature
. This value may be useful in feature traversal or if accessing the feature by position using
IModelDoc2::FeatureByPositionReverse
or
IModelDoc2::IFeatureByPositionReverse
.

## Examples

- Traverse Features By Reverse Position (C#) (Traverse_Features_By_Reverse_Position_Example_CSharp.htm)
- Traverse Features By Reverse Position (VB.NET) (Traverse_Features_By_Reverse_Position_Example_VBNET.htm)
- Traverse Features By Reverse Position (VBA) (Traverse_Features_By_Reverse_Position_Example_VB.htm)
- Get Features in Reverse Order (C#) (Get_Features_in_Reverse_Order_Example_CSharp.htm)
- Get Features in Reverse Order (VB.NET) (Get_Features_in_Reverse_Order_Example_VBNET.htm)
- Get Features in Reverse Order (VBA) (Get_Features_in_Reverse_Order_Example_VB.htm)