---
type: method
interface: ISlicingData
member: GetBoundingBoxDirection3
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.SetBoundingBoxDirection3
keywords:
  - getboundingboxdirection3
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction3
  - double
---

# ISlicingData.GetBoundingBoxDirection3

Gets bounding box direction 3 (left manipulator for linear slicing, inner radius for radial slicing).

## Signature

```csharp
System.Double GetBoundingBoxDirection3()
```
## Parameters

None.

## Return Value

For linear slicing: -500.0 < left manipulator < 0.0 For angular slicing: 0.0 < inner radius < outer radius

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

- `ISlicingData.SetBoundingBoxDirection3`