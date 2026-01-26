---
type: method
interface: IComponent2
member: IFindAttribute
returns: Attribute
parameters:
  -
    name: AttributeDef
    type: AttributeDef
    description: Pointer to an attribute definition that you are looking for on this component
  -
    name: WhichOne
    type: System.Int32
    description: Index number of the attribute that you want to return; there might be several attributes on this component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.FindAttribute
keywords:
  - ifindattribute
  - icomponent2
  - component2
  - find
  - attribute
  - def
  - which
  - one
  - int32
---

# IComponent2.IFindAttribute

Finds an attribute on a component.

## Signature

```csharp
Attribute IFindAttribute( 
   AttributeDef
AttributeDef
,
   System.Int32
WhichOne
)
```
## Parameters

- `AttributeDef` (AttributeDef): Pointer to an attribute definition that you are looking for on this component
- `WhichOne` (System.Int32): Index number of the attribute that you want to return; there might be several attributes on this component

## Return Value

Pointer to the attribute

## See Also

- `IComponent2.FindAttribute`