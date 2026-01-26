---
type: method
interface: IModelDoc2
member: EditUnsuppress2
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
  - IModelDoc2.EditSuppress2
  - IModelDoc2.EditUnsuppressDependent2
keywords:
  - components
  - see
  - also
  - icomponent2
  - unsuppress
  - feature
  - ifeature
  - features
  - sheet
  - metal
  - isheetmetalfeaturedata
  - unfold
  - flatten
  - editunsuppress2
  - imodeldoc2
  - model
  - doc2
  - edit
  - unsuppress2
  - boolean
  - part
  - persistent
  - reference
  - ids
  - vb
  - net
  - vba
---

# IModelDoc2.EditUnsuppress2

Unsuppresses the selected feature or component.

## Signature

```csharp
System.Boolean EditUnsuppress2()
```
## Parameters

None.

## Return Value

True if the selected feature or component is unsuppressed, false if not

## Remarks

This routine is identical to the obsoleted IModelDoc2::EditUnsuppress. The version number was incremented to allow VB applications to take advantage of information not available in the obsoleted IPartDoc::EditUnsuppress.

## Examples

- Set and Get Sheet Metal Part's Persistent Reference IDs (C#) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_CSharp.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VB.NET) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VBNET.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VBA) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VB.htm)

## See Also

- `IModelDoc2.EditSuppress2`
- `IModelDoc2.EditUnsuppressDependent2`