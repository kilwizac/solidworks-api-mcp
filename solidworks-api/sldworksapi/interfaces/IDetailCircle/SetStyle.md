---
type: method
interface: IDetailCircle
member: SetStyle
returns: System.Boolean
parameters:
  -
    name: Style
    type: System.Int32
    description: Style as defined by swDetViewStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetStyle
keywords:
  - setstyle
  - idetailcircle
  - detail
  - circle
  - style
  - int32
  - boolean
---

# IDetailCircle.SetStyle

Sets the style of the detail circle (for example, standard, broken, leader, no leader, or connected).

## Signature

```csharp
System.Boolean SetStyle( 
   System.Int32
Style
)
```
## Parameters

- `Style` (System.Int32): Style as defined by swDetViewStyle_e

## Return Value

True if setting the detail view style is successful, false if not

## Remarks

This method sets different styles for the detail view display, following the detailing standard, as a broken circle, as a circle or profile with or without a leader to the detail label, or with a line connecting the detail circle or profile with the detail view.
This method automatically load the model for the detail view, if necessary, without prompting the user.
If the style of the detail circle is swDetViewBROKEN or swDetViewSTANDARD and the current detailing standard is ANSI, then this method automatically switches the detail circle or profile display to circle because a broken circle style requires a circle, not a profile.

## See Also

- `IDetailCircle.GetStyle`