---
type: method
interface: IAssemblyDoc
member: AddPipingFitting
returns: System.Boolean
parameters:
  -
    name: PathName
    type: System.String
    description: Full name and directory location of part file used for this fitting
  -
    name: ConfigName
    type: System.String
    description: Configuration within the fitting part file which should be used
  -
    name: AlignmentIndex
    type: System.Int16
    description: Each fitting has a varying number of alignment positions; this value allows you to choose the alignment position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddPipePenetration
keywords:
  - piping
  - fitting
  - addpipingfitting
  - iassemblydoc
  - assembly
  - doc
  - add
  - path
  - name
  - string
  - config
  - alignment
  - index
  - int16
  - boolean
---

# IAssemblyDoc.AddPipingFitting

Adds a pipe fitting to the current piping assembly.

## Signature

```csharp
System.Boolean AddPipingFitting( 
   System.String
PathName
,
   System.String
ConfigName
,
   System.Int16
AlignmentIndex
)
```
## Parameters

- `PathName` (System.String): Full name and directory location of part file used for this fitting
- `ConfigName` (System.String): Configuration within the fitting part file which should be used
- `AlignmentIndex` (System.Int16): Each fitting has a varying number of alignment positions; this value allows you to choose the alignment position

## Return Value

True if successful, false otherwise

## Remarks

This method adds a piping fitting to the selected sketch point. The sketch must be the active sketch of the piping assembly.
The alignmentIndex argument controls the alignment of the fitting. For example, you can align a t-piece in two ways: passing 0 aligns the t-piece one way, and passing 1 aligns it the other way.
If the routing DLL is not available, then COM returns ITF_E_ROUTINGNOTLOADED.

## See Also

- `IAssemblyDoc.AddPipePenetration`