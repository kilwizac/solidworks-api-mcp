---
type: method
interface: ISketchManager
member: ReverseEndPointTangent
returns: System.Int32
parameters:
  -
    name: ForceDeleteConstraints
    type: System.Boolean
    description: True to force the deletion of constraints, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - arcs
  - tangent
  - splines
  - reverseendpointtangent
  - isketchmanager
  - sketch
  - manager
  - reverse
  - end
  - point
  - force
  - delete
  - constraints
  - boolean
  - int32
---

# ISketchManager.ReverseEndPointTangent

Reverses the end point tangent direction of splines and arcs.

## Signature

```csharp
System.Int32 ReverseEndPointTangent( 
   System.Boolean
ForceDeleteConstraints
)
```
## Parameters

- `ForceDeleteConstraints` (System.Boolean): True to force the deletion of constraints, false to not

## Return Value

Result code as defined in swReverseEndPointTangentResult_e