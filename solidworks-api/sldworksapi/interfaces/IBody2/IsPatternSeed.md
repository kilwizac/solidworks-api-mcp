---
type: method
interface: IBody2
member: IsPatternSeed
returns: System.Boolean
parameters:
  -
    name: BodyDispIn
    type: System.Object
    description: Patterned body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - seed
  - ispatternseed
  - body2
  - pattern
  - body
  - disp
  - object
  - boolean
---

# IBody2.IsPatternSeed

Gets whether this body is the seed of a patterned body.

## Signature

```csharp
System.Boolean IsPatternSeed( 
   System.Object
BodyDispIn
)
```
## Parameters

- `BodyDispIn` (System.Object): Patterned body

## Return Value

True if this body is the seed of the patterned body, false if not