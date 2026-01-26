---
type: method
interface: IDetailCircle
member: SetFullOutline
returns: System.Boolean
parameters:
  -
    name: FullOutline
    type: System.Boolean
    description: True if the full circle or profile outline is shown in the detail view, false if only the portion of the circle or profile that intersects the view geometry is shown
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.HasFullOutline
keywords:
  - setfulloutline
  - idetailcircle
  - detail
  - circle
  - full
  - outline
  - boolean
---

# IDetailCircle.SetFullOutline

Sets whether the complete detail circle or detail profile is shown in the detail view, or if just the part of the circle or profile that intersects the view geometry is shown.

## Signature

```csharp
System.Boolean SetFullOutline( 
   System.Boolean
FullOutline
)
```
## Parameters

- `FullOutline` (System.Boolean): True if the full circle or profile outline is shown in the detail view, false if only the portion of the circle or profile that intersects the view geometry is shown

## Return Value

True if setting the full outline flag is successful, false if not

## Remarks

This method:
is only available when
IDetailCircle::NoOutline
is false.
automatically loads the model for the detail view if necessary, without prompting the user.
If the style of the detail circle (see
IDetailCircle::GetStyle
) is swDetViewCONNECTED, then this method cannot disable the full outline because the full outline of the circle or profile must be shown.

## See Also

- `IDetailCircle.HasFullOutline`