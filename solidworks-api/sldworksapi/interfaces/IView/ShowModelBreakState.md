---
type: method
interface: IView
member: ShowModelBreakState
returns: System.Boolean
parameters:
  -
    name: ShowIt
    type: System.Boolean
    description: True to display the Model Break View specified in BreakName, false to not
  -
    name: BreakName
    type: System.String
    description: Name of Model Break View to display
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IsModelBreakState
keywords:
  - model
  - break
  - views
  - drawing
  - see
  - also
  - iview
  - view
  - showmodelbreakstate
  - show
  - state
  - it
  - boolean
  - name
  - string
  - display
  - vba
  - vb
  - net
---

# IView.ShowModelBreakState

Sets whether to display the specified Model Break View.

## Signature

```csharp
System.Boolean ShowModelBreakState( 
   System.Boolean
ShowIt
,
   System.String
BreakName
)
```
## Parameters

- `ShowIt` (System.Boolean): True to display the Model Break View specified in BreakName, false to not
- `BreakName` (System.String): Name of Model Break View to display

## Return Value

True if successful, false if not

## Examples

- Get and Set Model Break View Display (VBA) (Get_and_Set_Model_Break_View_Display_Example_VB.htm)
- Get and Set Model Break View Display (VB.NET) (Get_and_Set_Model_Break_View_Display_Example_VBNET.htm)
- Get and Set Model Break View Display (C#) (Get_and_Set_Model_Break_View_Display_Example_CSharp.htm)

## See Also

- `IView.IsModelBreakState`