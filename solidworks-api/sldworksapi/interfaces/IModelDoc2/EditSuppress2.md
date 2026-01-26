---
type: method
interface: IModelDoc2
member: EditSuppress2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.EditUnsuppress2
  - IModelDoc2.EditUnsuppressDependent2
keywords:
  - components
  - see
  - also
  - icomponent2
  - suppress
  - features
  - feature
  - ifeature
  - sheet
  - metal
  - isheetmetalfeaturedata
  - fold
  - editsuppress2
  - imodeldoc2
  - model
  - doc2
  - edit
  - suppress2
  - boolean
  - vba
  - part
  - persistent
  - reference
  - ids
  - vb
  - net
  - component
---

# IModelDoc2.EditSuppress2

Suppresses the selected feature, the selected component, or the owning feature of the selected face.

## Signature

```csharp
System.Boolean EditSuppress2()
```
## Parameters

None.

## Return Value

True if the selected feature, component, or owning feature of the selected face is suppressed, false if not

## Remarks

This routine is identical to the now obsolete IModelDoc2::EditSuppress. The version number was incremented to allow VB applications to take advantage of information not available in the now obsolete IPartDoc::EditSuppress2.
This method closes any component files when called in an assembly.
If the components were modified, then those modifications are not automatically saved. You must save any modifications before the files are closed.
SOLIDWORKS does not allow suppressing features or components while a PropertyManager page is open.

## Examples

- Suppress Feature (VBA) (Suppress_Feature_Example_VB.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (C#) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_CSharp.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VB.NET) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VBNET.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VBA) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VB.htm)
- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.EditUnsuppress2`
- `IModelDoc2.EditUnsuppressDependent2`