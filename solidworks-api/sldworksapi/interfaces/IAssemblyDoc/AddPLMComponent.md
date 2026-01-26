---
type: method
interface: IAssemblyDoc
member: AddPLMComponent
returns: System.Object
parameters:
  -
    name: PLMID
    type: System.String
    description: Unique ID of a component
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration (Physical Product) from which to load the component
  -
    name: X
    type: System.Double
    description: X-coordinate of the component center
  -
    name: Y
    type: System.Double
    description: Y-coordinate of the component center
  -
    name: Z
    type: System.Double
    description: Z-coordinate of the component center
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ReplacePLMComponents
keywords:
  - 3dexperience
  - solidworks
  - connected
  - addplmcomponent
  - iassemblydoc
  - assembly
  - doc
  - add
  - plm
  - component
  - plmid
  - string
  - config
  - name
  - double
  - object
---

# IAssemblyDoc.AddPLMComponent

Adds the specified component from a 3DEXPERIENCE collaborative space to the specified location in this assembly in SOLIDWORKS Design Augmented.

## Signature

```csharp
System.Object AddPLMComponent( 
   System.String
PLMID
,
   System.String
ConfigName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `PLMID` (System.String): Unique ID of a component
- `ConfigName` (System.String): Name of the configuration (Physical Product) from which to load the component
- `X` (System.Double): X-coordinate of the component center
- `Y` (System.Double): Y-coordinate of the component center
- `Z` (System.Double): Z-coordinate of the component center

## Return Value

IComponent2

## See Also

- `IAssemblyDoc.ReplacePLMComponents`