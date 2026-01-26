---
type: method
interface: IComponent2
member: FindAttribute
returns: System.Object
parameters:
  -
    name: AttributeDef
    type: System.Object
    description: Attribute definition that you are looking for on this component
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
  - IComponent2.IFindAttribute
keywords:
  - findattribute
  - icomponent2
  - component2
  - find
  - attribute
  - def
  - object
  - which
  - one
  - int32
---

# IComponent2.FindAttribute

Finds an attribute on a component.

## Signature

```csharp
System.Object FindAttribute( 
   System.Object
AttributeDef
,
   System.Int32
WhichOne
)
```
## Parameters

- `AttributeDef` (System.Object): Attribute definition that you are looking for on this component
- `WhichOne` (System.Int32): Index number of the attribute that you want to return; there might be several attributes on this component

## Return Value

Pointer to the attribute

## See Also

- `IComponent2.IFindAttribute`