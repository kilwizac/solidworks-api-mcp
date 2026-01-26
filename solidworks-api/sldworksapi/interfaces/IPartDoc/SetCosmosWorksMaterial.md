---
type: method
interface: IPartDoc
member: SetCosmosWorksMaterial
returns: void
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: Type
    type: System.Int32
    description: Type of material to assign as defined by swCosmosWorksMat
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IComponent2.SetCosmosWorksMaterial
keywords:
  - analysis
  - materials
  - material
  - parts
  - see
  - also
  - ipartdoc
  - setcosmosworksmaterial
  - part
  - doc
  - cosmos
  - works
  - config
  - name
  - string
  - type
  - int32
  - void
---

# IPartDoc.SetCosmosWorksMaterial

Assigns the material to use during analysis to this part.

## Signature

```csharp
void SetCosmosWorksMaterial( 
   System.String
ConfigName
,
   System.Int32
Type
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration
- `Type` (System.Int32): Type of material to assign as defined by swCosmosWorksMat

## Return Value

True if the material is assigned, false if not

## See Also

- `IComponent2.SetCosmosWorksMaterial`