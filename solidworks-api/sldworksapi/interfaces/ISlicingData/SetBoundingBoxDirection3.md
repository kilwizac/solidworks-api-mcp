---
type: method
interface: ISlicingData
member: SetBoundingBoxDirection3
returns: System.Boolean
parameters:
  -
    name: Direction
    type: System.Double
    description: For linear slicing: -500.0 < left manipulator < 0.0 For radial slicing: 0.0 < inner radius < outer radius (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.GetBoundingBoxDirection3
keywords:
  - setboundingboxdirection3
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction3
  - direction
  - double
  - boolean
---

# ISlicingData.SetBoundingBoxDirection3

Sets bounding box direction 3 (left manipulator for linear slicing, inner radius for radial slicing).

## Signature

```csharp
System.Boolean SetBoundingBoxDirection3( 
   System.Double
Direction
)
```
## Parameters

- `Direction` (System.Double): For linear slicing: -500.0 < left manipulator < 0.0 For radial slicing: 0.0 < inner radius < outer radius (see Remarks )

## Return Value

True if direction 3 of bounding box successfully set, false if not

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

- `ISlicingData.GetBoundingBoxDirection3`