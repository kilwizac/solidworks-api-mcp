---
type: method
interface: ICallout
member: GetLeader
returns: System.Boolean
parameters:
  -
    name: Visible
    type: System.Boolean
    description: True if leader is displayed, false if not (see Remarks )
  -
    name: Multiple
    type: System.Boolean
    description: True if multiple leaders are displayed, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.SetLeader
keywords:
  - leaders
  - callouts
  - getleader
  - icallout
  - callout
  - leader
  - visible
  - boolean
  - multiple
---

# ICallout.GetLeader

Gets the leader properties of the callout.

## Signature

```csharp
System.Boolean GetLeader( 
   out System.Boolean
Visible
,
   out System.Boolean
Multiple
)
```
## Parameters

- `Visible` (System.Boolean): True if leader is displayed, false if not (see Remarks )
- `Multiple` (System.Boolean): True if multiple leaders are displayed, false if not

## Return Value

Unknown.

## Remarks

If Visible is false, then
ICallout::TargetStyle
is swCalloutTargetStyle_None.

## See Also

- `ICallout.SetLeader`