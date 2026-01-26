---
type: method
interface: ISlicingData
member: SetBoundingBoxDirection1
returns: System.Boolean
parameters:
  -
    name: Direction
    type: System.Double
    description: 0.0 < top manipulator < 500.0 (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISlicingData.GetBoundingBoxDirection1
keywords:
  - setboundingboxdirection1
  - islicingdata
  - slicing
  - data
  - bounding
  - box
  - direction1
  - direction
  - double
  - boolean
---

# ISlicingData.SetBoundingBoxDirection1

Sets bounding box direction 1 (top manipulator for both linear and radial slicing).

## Signature

```csharp
System.Boolean SetBoundingBoxDirection1( 
   System.Double
Direction
)
```
## Parameters

- `Direction` (System.Double): 0.0 < top manipulator < 500.0 (see Remarks )

## Return Value

True if direction 1 of bounding box successfully set, false if not

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

- `ISlicingData.GetBoundingBoxDirection1`