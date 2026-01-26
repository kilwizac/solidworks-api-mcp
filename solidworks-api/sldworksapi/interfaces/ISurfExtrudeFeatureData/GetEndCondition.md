---
type: method
interface: ISurfExtrudeFeatureData
member: GetEndCondition
returns: System.Int32
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True gets the end condition in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.SetEndCondition
keywords:
  - getendcondition
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - end
  - condition
  - forward
  - boolean
  - int32
---

# ISurfExtrudeFeatureData.GetEndCondition

Gets the end condition of this extruded surface for the forward or reverse direction.

## Signature

```csharp
System.Int32 GetEndCondition( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True gets the end condition in the forward direction, false gets it in the reverse direction

## Return Value

End condition as defined in swEndConditions_e

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.SetEndCondition`