---
type: method
interface: IComponent2
member: SetCosmosWorksMaterial
returns: System.Boolean
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
  - assemblies
related:
  - IPartDoc.SetCosmosWorksMaterial
keywords:
  - material
  - components
  - see
  - also
  - icomponent2
  - analysis
  - materials
  - setcosmosworksmaterial
  - component2
  - cosmos
  - works
  - config
  - name
  - string
  - type
  - int32
  - boolean
---

# IComponent2.SetCosmosWorksMaterial

Assigns the material to use during analysis to this component.

## Signature

```csharp
System.Boolean SetCosmosWorksMaterial( 
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

- `IPartDoc.SetCosmosWorksMaterial`