---
type: method
interface: IModelDoc2
member: Toolbars
returns: void
parameters:
  -
    name: M
    type: System.Boolean
    description: True for main toolbar on, false for off
  -
    name: Vw
    type: System.Boolean
    description: True for view manipulation toolbar on, false for off
  -
    name: SkMain
    type: System.Boolean
    description: RUE for main sketch toolbar on, false for off
  -
    name: Sk
    type: System.Boolean
    description: True for sketch entity toolbar on, false for off
  -
    name: Feat
    type: System.Boolean
    description: True for feature toolbar on, false for off
  -
    name: Constr
    type: System.Boolean
    description: True for relationships toolbar on, false for off
  -
    name: Macro
    type: System.Boolean
    description: True for macro toolbar on, false for off
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetToolbarVisibility
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
  - ISldWorks.ShowToolbar2
keywords:
  - toolbars
  - imodeldoc2
  - model
  - doc2
  - boolean
  - vw
  - sk
  - main
  - feat
  - constr
  - macro
  - void
---

# IModelDoc2.Toolbars

Turns the specified SOLIDWORKS toolbars on and off.

## Signature

```csharp
void Toolbars( 
   System.Boolean
M
,
   System.Boolean
Vw
,
   System.Boolean
SkMain
,
   System.Boolean
Sk
,
   System.Boolean
Feat
,
   System.Boolean
Constr
,
   System.Boolean
Macro
)
```
## Parameters

- `M` (System.Boolean): True for main toolbar on, false for off
- `Vw` (System.Boolean): True for view manipulation toolbar on, false for off
- `SkMain` (System.Boolean): RUE for main sketch toolbar on, false for off
- `Sk` (System.Boolean): True for sketch entity toolbar on, false for off
- `Feat` (System.Boolean): True for feature toolbar on, false for off
- `Constr` (System.Boolean): True for relationships toolbar on, false for off
- `Macro` (System.Boolean): True for macro toolbar on, false for off

## Return Value

Unknown.

## Remarks

See
IModelDoc2::SetToolbarVisibility
for control of all SOLIDWORKS toolbars.

## See Also

- `IModelDoc2.GetToolbarVisibility`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.ShowToolbar2`