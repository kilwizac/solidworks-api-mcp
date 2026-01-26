---
type: method
interface: ISlicingData
member: SetBoundingBoxDirection4
returns: System.Boolean
parameters:
  -
    name: Direction
    type: System.Double
    description: For linear slicing: -500.0 < bottom manipulator < 0 For radial slicing: Inner radius < outer radius < user-interface maximum for this case (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.GetBoundingBoxDirection4
keywords:
  - setboundingboxdirection4
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction4
  - direction
  - double
  - boolean
---

# ISlicingData.SetBoundingBoxDirection4

Sets bounding box direction 4 (bottom manipulator for linear slicing, outer radius for radial slicing).

## Signature

```csharp
System.Boolean SetBoundingBoxDirection4( 
   System.Double
Direction
)
```
## Parameters

- `Direction` (System.Double): For linear slicing: -500.0 < bottom manipulator < 0 For radial slicing: Inner radius < outer radius < user-interface maximum for this case (see Remarks )

## Return Value

True if direction 4 of bounding box successfully set, false if not

## Remarks

Use these methods to adjust the slicing volume to include or exclude geometry for slicing:
ISlicingData::SetBoundingBoxDirection1
ISlicingData::SetBoundingBoxDirection2
ISlicingData::SetBoundingBoxDirection3
ISlicingData::SetBoundingBoxDirection4
This method fails when:
Direction exceeds the specified limits.
The bounding box cannot be created because
ISlicingData::PlaneReferences
has not been set.

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)

## See Also

- `ISlicingData.GetBoundingBoxDirection4`