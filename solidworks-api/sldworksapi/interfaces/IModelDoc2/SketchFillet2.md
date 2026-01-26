---
type: method
interface: IModelDoc2
member: SketchFillet2
returns: System.Boolean
parameters:
  -
    name: Rad
    type: System.Double
    description: Radius of the fillet in meters
  -
    name: ConstrainedCorners
    type: System.Int16
    description: Action to take if the corner to be filleted is constrained or has a dimension (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - sketchfillet2
  - imodeldoc2
  - model
  - doc2
  - sketch
  - fillet2
  - rad
  - double
  - constrained
  - corners
  - int16
  - boolean
---

# IModelDoc2.SketchFillet2

Obsolete. Superseded by ISketchManager::CreateFillet.

## Signature

```csharp
System.Boolean SketchFillet2( 
   System.Double
Rad
,
   System.Int16
ConstrainedCorners
)
```
## Parameters

- `Rad` (System.Double): Radius of the fillet in meters
- `ConstrainedCorners` (System.Int16): Action to take if the corner to be filleted is constrained or has a dimension (see Remarks )

## Return Value

True if the fillet is created, false if not

## Remarks

The ConstrainedCorners argument:
Indicates what action to take if the corner to be filleted is constrained in some manner or has a dimension related to it. In this case, adding a fillet to the corner cannot be done without certain consequences. If the corner is not involved with any constraints, this argument is ignored.
Can take one of the values found in
swConstrainedCornerAction_e
.