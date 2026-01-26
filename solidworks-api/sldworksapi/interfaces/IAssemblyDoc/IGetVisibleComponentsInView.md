---
type: method
interface: IAssemblyDoc
member: IGetVisibleComponentsInView
returns: Component2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of visible components in this assembly
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetVisibleComponentsInView
keywords:
  - igetvisiblecomponentsinview
  - iassemblydoc
  - assembly
  - doc
  - visible
  - components
  - view
  - count
  - int32
  - component2
---

# IAssemblyDoc.IGetVisibleComponentsInView

Gets a list of visible components in this assembly to save as solid bodies.

## Signature

```csharp
Component2 IGetVisibleComponentsInView( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of visible components in this assembly

## Return Value

in-process, unmanaged C++: Pointer to an array of visible components in this assembly of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

One way to save an assembly as a multibody part document is to save the visible components in the assembly document as solid bodies. This method corresponds to the
Exterior Components
option in the
File, Save As
dialog box. For more information about saving assemblies as multibody documents, see SOLIDWORKS Help.
Call
IAssemblyDoc::GetVisibleComponentsInViewCount
before calling this method.

## See Also

- `IAssemblyDoc.GetVisibleComponentsInView`