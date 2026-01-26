---
type: method
interface: IAssemblyDoc
member: AddSmartComponent
returns: Component2
parameters:
  -
    name: CompName
    type: System.String
    description: Path and filename of the part document to add as a Smart Component
  -
    name: X
    type: System.Double
    description: X coordinate for the Smart Component
  -
    name: Y
    type: System.Double
    description: Y coordinate for the Smart Component
  -
    name: Z
    type: System.Double
    description: Z coordinate for the Smart Component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.CreateSmartComponent
  - IComponent2.GetSmartComponentData
  - IComponent2.IsSmartComponent
  - IComponent2.SetSmartComponentData
  - ISmartComponentFeatureData
keywords:
  - smart
  - components
  - see
  - also
  - icomponent2
  - assemblies
  - iassemblydoc
  - addsmartcomponent
  - assembly
  - doc
  - add
  - component
  - comp
  - name
  - string
  - double
  - component2
---

# IAssemblyDoc.AddSmartComponent

Adds the specified component at the specified coordinates as a Smart Component to this assembly.

## Signature

```csharp
Component2 AddSmartComponent( 
   System.String
CompName
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

- `CompName` (System.String): Path and filename of the part document to add as a Smart Component
- `X` (System.Double): X coordinate for the Smart Component
- `Y` (System.Double): Y coordinate for the Smart Component
- `Z` (System.Double): Z coordinate for the Smart Component

## Return Value

Smart Component

## See Also

- `IAssemblyDoc.CreateSmartComponent`
- `IComponent2.GetSmartComponentData`
- `IComponent2.IsSmartComponent`
- `IComponent2.SetSmartComponentData`
- `ISmartComponentFeatureData`