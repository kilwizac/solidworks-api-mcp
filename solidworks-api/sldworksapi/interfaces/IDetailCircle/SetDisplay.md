---
type: method
interface: IDetailCircle
member: SetDisplay
returns: System.Boolean
parameters:
  -
    name: Display
    type: System.Int32
    description: Display as defined by swDetCircleShowType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetStyle
keywords:
  - setdisplay
  - idetailcircle
  - detail
  - circle
  - display
  - int32
  - boolean
---

# IDetailCircle.SetDisplay

Sets the display of the detail circle to a circle or to the profile.

## Signature

```csharp
System.Boolean SetDisplay( 
   System.Int32
Display
)
```
## Parameters

- `Display` (System.Int32): Display as defined by swDetCircleShowType_e

## Return Value

True if setting the detail circle display is successful, false if not

## Remarks

Use this method to display the detail circle or detail profile as a circle or as a profile.
If...
Then...
Detail circle was originally set up as a circle
there is no profile.
using this method to set display to swDetCirclePROFILE has no effect.
this method returns false.
Style of the detail circle (see
IDetailCircle::GetStyle
) is swDetViewBROKEN or swDetViewSTANDARD
and the current detailing standard is ANSI
this method cannot set the display to swDetCirclePROFILE because the display must
be a circle.

## See Also

- `IDetailCircle.GetStyle`