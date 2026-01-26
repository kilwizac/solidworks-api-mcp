---
type: method
interface: IView
member: GetUniqueName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetName2
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - names
  - name
  - view
  - section
  - getuniquename
  - unique
  - string
  - vba
  - vb
  - net
---

# IView.GetUniqueName

Gets the unique name of this section view.

## Signature

```csharp
System.String GetUniqueName()
```
## Parameters

None.

## Return Value

Name of this section view

## Remarks

Before selecting a specific section view using
IModelDocExtension::SelectByID2
, call this method to get the unique name of the section view in "Drawing View
number
" format.

## Examples

- Get Unique Name of Section View (VBA) (Get_Unique_Name_of_Section_View_Example_VB.htm)
- Get Unique Name of Section View (VB.NET) (Get_Unique_Name_of_Section_View_Example_VBNET.htm)
- Get Unique Name of Section View (C#) (Get_Unique_Name_of_Section_View_Example_CSharp.htm)

## See Also

- `IView.GetName2`