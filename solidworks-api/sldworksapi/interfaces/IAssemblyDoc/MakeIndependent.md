---
type: method
interface: IAssemblyDoc
member: MakeIndependent
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name where to save the new part (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ReplaceComponents2
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - independent
  - components
  - icomponent2
  - make
  - makeindependent
  - assembly
  - doc
  - file
  - name
  - string
  - boolean
  - component
  - vb
  - net
  - vba
---

# IAssemblyDoc.MakeIndependent

Makes the selected component independent.

## Signature

```csharp
System.Boolean MakeIndependent( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name where to save the new part (see Remarks )

## Return Value

True if the component is made independent, false if not

## Remarks

Making a component independent saves the component as a new file within the assembly and to the specified path and file name. The new part is referenced in the assembly.

## Examples

- Make Component Independent (C#) (Make_Component_Independent_Example_CSharp.htm)
- Make Component Independent (VB.NET) (Make_Component_Independent_Example_VBNET.htm)
- Make Component Independent (VBA) (Make_Component_Independent_Example_VB.htm)

## See Also

- `IAssemblyDoc.ReplaceComponents2`