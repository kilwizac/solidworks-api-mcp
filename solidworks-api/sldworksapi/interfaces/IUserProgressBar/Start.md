---
type: method
interface: IUserProgressBar
member: Start
returns: System.Boolean
parameters:
  -
    name: LowerBound
    type: System.Int32
    description: Lower bound of range
  -
    name: UpperBound
    type: System.Int32
    description: Upper bound of range
  -
    name: ProgressBarTitle
    type: System.String
    description: Title of progress indicator to show in status bar
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - start
  - iuserprogressbar
  - user
  - progress
  - bar
  - lower
  - bound
  - int32
  - upper
  - title
  - string
  - boolean
---

# IUserProgressBar.Start

Sets the range of the progress indicator display and shows it on the SOLIDWORKS status bar.

## Signature

```csharp
System.Boolean Start( 
   System.Int32
LowerBound
,
   System.Int32
UpperBound
,
   System.String
ProgressBarTitle
)
```
## Parameters

- `LowerBound` (System.Int32): Lower bound of range
- `UpperBound` (System.Int32): Upper bound of range
- `ProgressBarTitle` (System.String): Title of progress indicator to show in status bar

## Return Value

True if progress indicator successfully started, false if not

## Examples

- IUserProgressBar (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar)