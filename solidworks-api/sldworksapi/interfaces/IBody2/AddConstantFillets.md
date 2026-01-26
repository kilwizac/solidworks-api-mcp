---
type: method
interface: IBody2
member: AddConstantFillets
returns: System.Object
parameters:
  -
    name: Radius
    type: System.Double
    description: Fillet radius
  -
    name: EdgesToFillet
    type: System.Object
    description: Array of edges to fillet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - constant
  - radius
  - fillets
  - addconstantfillets
  - ibody2
  - body2
  - add
  - double
  - edges
  - fillet
  - object
---

# IBody2.AddConstantFillets

Creates constant radius fillets on the specified edges on this body.

## Signature

```csharp
System.Object AddConstantFillets( 
   System.Double
Radius
,
   System.Object
EdgesToFillet
)
```
## Parameters

- `Radius` (System.Double): Fillet radius
- `EdgesToFillet` (System.Object): Array of edges to fillet

## Return Value

Array of newly created faces

## Remarks

This method does not work for sheet bodies.