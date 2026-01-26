---
type: method
interface: ISlicingData
member: GetBoundingBoxDirection2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.SetBoundingBoxDirection2
keywords:
  - getboundingboxdirection2
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction2
  - double
---

# ISlicingData.GetBoundingBoxDirection2

Gets bounding box direction 2 (right manipulator for linear slicing, bottom manipulator for radial slicing).

## Signature

```csharp
System.Double GetBoundingBoxDirection2()
```
## Parameters

None.

## Return Value

For linear slicing: 0.0 < right manipulator < 500.0 For radial slicing: -500.0 < bottom manipulator < 0.0

## Remarks

This method is only valid after you have pre-selected the first slicing plane.
Use these methods to get the slicing volume for including or excluding geometry for slicing:
ISlicingData::GetBoundingBoxDirection1
ISlicingData::GetBoundingBoxDirection2
ISlicingData::GetBoundingBoxDirection3
ISlicingData::GetBoundingBoxDirection4

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)

## See Also

- `ISlicingData.SetBoundingBoxDirection2`