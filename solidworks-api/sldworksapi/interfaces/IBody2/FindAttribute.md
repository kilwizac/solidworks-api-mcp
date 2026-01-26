---
type: method
interface: IBody2
member: FindAttribute
returns: Attribute
parameters:
  -
    name: AttributeDef
    type: AttributeDef
    description: Pointer to the attribute definition that you want to find
  -
    name: WhichOne
    type: System.Int32
    description: Instance number of this type on the body (0, 1, 2, 3, and so on)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - attribute
  - see
  - also
  - iattribute
  - find
  - findattribute
  - ibody2
  - body2
  - def
  - which
  - one
  - int32
---

# IBody2.FindAttribute

Finds an attribute on a body.

## Signature

```csharp
Attribute FindAttribute( 
   AttributeDef
AttributeDef
,
   System.Int32
WhichOne
)
```
## Parameters

- `AttributeDef` (AttributeDef): Pointer to the attribute definition that you want to find
- `WhichOne` (System.Int32): Instance number of this type on the body (0, 1, 2, 3, and so on)

## Return Value

Pointer to the attribute instance