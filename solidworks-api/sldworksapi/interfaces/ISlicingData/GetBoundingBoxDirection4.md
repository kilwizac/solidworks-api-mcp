---
type: method
interface: ISlicingData
member: GetBoundingBoxDirection4
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.SetBoundingBoxDirection4
keywords:
  - getboundingboxdirection4
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction4
  - double
---

# ISlicingData.GetBoundingBoxDirection4

Gets bounding box direction 4 (bottom manipulator for linear slicing, outer radius for radial slicing).

## Signature

```csharp
System.Double GetBoundingBoxDirection4()
```
## Parameters

None.

## Return Value

For linear slicing: -500.0 < bottom manipulator < 0 For radial slicing: Inner radius < outer radius < user-interface maximum for this case

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

- `ISlicingData.SetBoundingBoxDirection4`