---
type: method
interface: IPropertyManagerPage2
member: SetCursor
returns: void
parameters:
  -
    name: Mode
    type: System.Int32
    description: Cursor as defined by swPropertyManagerPageCursors_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - cursor
  - setcursor
  - manager
  - page2
  - mode
  - int32
  - void
---

# IPropertyManagerPage2.SetCursor

Sets the cursor after a selection is made in the SOLIDWORKS graphics area.

## Signature

```csharp
void SetCursor( 
   System.Int32
Mode
)
```
## Parameters

- `Mode` (System.Int32): Cursor as defined by swPropertyManagerPageCursors_e

## Return Value

Unknown.

## Remarks

Calling this method in
IPropertyManagerPage2Hander8::OnSelectionboxListChanged
enables the right-mouse button and cursor and allows an interactive user to:
move to the next selection box on the PropertyManager page
okay and close a PropertyManager page
after making a selection in the SOLIDWORKS graphics area.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)