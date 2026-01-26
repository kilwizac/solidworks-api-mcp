---
type: method
interface: IAssemblyDoc
member: IToolsCheckInterference2
returns: void
parameters:
  -
    name: NumComponents
    type: System.Int32
    description: 
  -
    name: LpComponents
    type: Component
    description: 
  -
    name: CoincidentInterference
    type: System.Boolean
    description: 
  -
    name: PComp
    type: System.Object
    description: 
  -
    name: PFace
    type: System.Object
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - itoolscheckinterference2
  - iassemblydoc
  - assembly
  - doc
  - tools
  - check
  - interference2
  - num
  - components
  - int32
  - lp
  - component
  - coincident
  - interference
  - boolean
  - comp
  - object
  - face
  - void
---

# IAssemblyDoc.IToolsCheckInterference2

Obsolete. See IAssemblyDoc::IToolsCheckInterference3.

## Signature

```csharp
void IToolsCheckInterference2( 
   System.Int32
NumComponents
,
   ref Component
LpComponents
,
   System.Boolean
CoincidentInterference
,
   out System.Object
PComp
,
   out System.Object
PFace
)
```
## Parameters

- `NumComponents` (System.Int32): 
- `LpComponents` (Component): 
- `CoincidentInterference` (System.Boolean): 
- `PComp` (System.Object): 
- `PFace` (System.Object): 

## Return Value

Unknown.