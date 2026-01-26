---
type: method
interface: IView
member: InsertAlternateView
returns: View
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - alternate
  - position
  - views
  - drawing
  - see
  - also
  - iview
  - view
  - insertalternateview
  - insert
  - configuration
  - name
  - string
  - vba
---

# IView.InsertAlternateView

Inserts an Alternate Position View of the currently selected drawing view.

## Signature

```csharp
View InsertAlternateView( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration (see Remarks )

## Return Value

Alternate drawing view

## Remarks

Before using this method, you must select a drawing view on which to superimpose the
Alternate Position View
.
If you specify a non-existent configuration for ConfigurationName, then it is created using all default settings. The new configuration is identical to
the currently selected configuration. The user can then open the assembly, edit the configuration, and update the drawing view

## Examples

- Insert Alternate Position View (VBA) (Insert_Alternate_Position_View_Example_VB.htm)