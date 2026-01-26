---
type: method
interface: IComponent2
member: GetPathName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetImportedPath
  - IModelDoc2.GetPathName
keywords:
  - getpathname
  - icomponent2
  - component2
  - path
  - name
  - string
  - component
  - selected
  - entity
  - vba
  - components
  - properties
  - drawing
  - view
  - part
  - corresponding
  - make
  - assembly
  - lightweight
  - all
  - resolved
  - keep
  - solidworks
  - invisible
  - while
  - activating
  - documents
  - vb
  - net
---

# IComponent2.GetPathName

Gets the full path name for this component.

## Signature

```csharp
System.String GetPathName()
```
## Parameters

None.

## Return Value

Full path name for this component, including the filename

## Remarks

The underlying document for this component might not have been loaded into memory if the component is lightweight or suppressed. In this situation,
IComponent2::GetModelDoc
or
IComponent2::IGetModelDoc
may return NULL and the file and path name returned by this method will be the As-Saved file and path name for the IComponent2.
This method does not apply search criteria or look in the current working directory for the component file reference if the component is lightweight or suppressed.

## Examples

- Get Component for Selected Entity (VBA) (Get_Component_for_Selected_Entity_Example_VB.htm)
- Get Components Properties in Drawing View (VBA) (Get_Components_Properties_in_Drawing_View_Example_VB.htm)
- Get Part for Corresponding Component (VBA) (Get_Part_for_Corresponding_Component_Example_VB.htm)
- Make Assembly Components Lightweight (VBA) (Make_Assembly_Components_Lightweight_Example_VB.htm)
- Set All Assembly Components Lightweight or Resolved (VBA) (Set_All_Assembly_Components_Lightweight_or_Resolved_Example_VB.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (C#) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_CSharp.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VB.NET) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VBNET.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VBA) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VB.htm)

## See Also

- `IComponent2.GetImportedPath`
- `IModelDoc2.GetPathName`