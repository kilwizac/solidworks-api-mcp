---
type: method
interface: ISlicingData
member: GetBoundingBoxDirection1
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.SetBoundingBoxDirection1
keywords:
  - getboundingboxdirection1
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction1
  - double
---

# ISlicingData.GetBoundingBoxDirection1

Gets bounding box direction 1 (top manipulator for both linear and radial slicing).

## Signature

```csharp
System.Double GetBoundingBoxDirection1()
```
## Parameters

None.

## Return Value

0.0 < top manipulator < 500.0

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

- `ISlicingData.SetBoundingBoxDirection1`