---
type: method
interface: ISldWorks
member: GetUserProgressBar
returns: System.Boolean
parameters:
  -
    name: PProgressBar
    type: UserProgressBar
    description: IUserProgressBar
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IStatusBarPane
keywords:
  - user
  - progress
  - bar
  - see
  - iuserprogressbar
  - getuserprogressbar
  - isldworks
  - sld
  - works
  - boolean
  - start
  - update
  - stop
  - indicator
  - vba
  - vb
  - net
---

# ISldWorks.GetUserProgressBar

Gets a progress indicator.

## Signature

```csharp
System.Boolean GetUserProgressBar( 
   out UserProgressBar
PProgressBar
)
```
## Parameters

- `PProgressBar` (UserProgressBar): IUserProgressBar

## Return Value

True if the progress indicator object is returned, false if not

## Examples

- Start, Update, and Stop Progress Indicator (VBA) (Start,_Update,_and_Stop_User_Progress_Indicator_Example_VB.htm)
- Start, Update, and Stop Progress Indicator (VB.NET) (Start,_Update,_and_Stop_User_Progress_Bar_Example_VBNET.htm)
- Start, Update, and Stop Progress Indicator (C#) (Start,_Update,_and_Stop_User_Progress_Bar_Example_CSharp.htm)

## See Also

- `IStatusBarPane`