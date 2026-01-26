---
type: method
interface: IAssemblyDoc
member: MakeAssemblyFromSelectedComponents
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and filename of the new assembly
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - selections
  - ui
related: []
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - makeassemblyfromselectedcomponents
  - assembly
  - doc
  - make
  - selected
  - file
  - name
  - string
  - boolean
  - vb
  - net
  - vba
---

# IAssemblyDoc.MakeAssemblyFromSelectedComponents

Creates a new assembly comprised of the selected components of this assembly.

## Signature

```csharp
System.Boolean MakeAssemblyFromSelectedComponents( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and filename of the new assembly

## Return Value

True if a new assembly is created, false if not

## Remarks

If
Tools > Options > System Options > Assemblies >  Save new components to external files
is selected, then a virtual sub-assembly is created and saved to an external file. Be sure to save the parent assembly before calling this method.
If
Tools > Options > System Options > Assemblies >  Save new components to external files
is not selected, then the
FileName
input parameter is ignored, and only a virtual sub-assembly is created.

## Examples

- Make Assembly From Selected Components (VB.NET) (Make_Assembly_From_Selected_Components_Example_VBNET.htm)
- Make Assembly From Selected Components (VBA) (Make_Assembly_From_Selected_Components_Example_VB.htm)
- Make Assembly From Selected Components (C#) (Make_Assembly_From_Selected_Components_Example_CSharp.htm)