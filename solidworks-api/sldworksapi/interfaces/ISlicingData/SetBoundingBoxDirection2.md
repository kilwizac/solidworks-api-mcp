---
type: method
interface: ISlicingData
member: SetBoundingBoxDirection2
returns: System.Boolean
parameters:
  -
    name: Direction
    type: System.Double
    description: For linear slicing: 0.0 < right manipulator < 500.0 For radial slicing: -500.0 < bottom manipulator < 0.0 (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.GetBoundingBoxDirection2
keywords:
  - setboundingboxdirection2
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction2
  - direction
  - double
  - boolean
---

# ISlicingData.SetBoundingBoxDirection2

Sets bounding box direction 2 (right manipulator for linear slicing, bottom manipulator for radial slicing).

## Signature

```csharp
System.Boolean SetBoundingBoxDirection2( 
   System.Double
Direction
)
```
## Parameters

- `Direction` (System.Double): For linear slicing: 0.0 < right manipulator < 500.0 For radial slicing: -500.0 < bottom manipulator < 0.0 (see Remarks )

## Return Value

True if direction 2 of bounding box successfully set, false if not

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

- `ISlicingData.GetBoundingBoxDirection2`