---
type: method
interface: ISelectionMgr
member: SetCallout
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the selected object
  -
    name: PCallout
    type: Callout
    description: Callout (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - callout
  - see
  - also
  - icallout
  - add
  - objects
  - callouts
  - setcallout
  - iselectionmgr
  - selection
  - mgr
  - index
  - int32
  - boolean
---

# ISelectionMgr.SetCallout

Adds a callout to the currently selected object.

## Signature

```csharp
System.Boolean SetCallout( 
   System.Int32
Index
,
   Callout
PCallout
)
```
## Parameters

- `Index` (System.Int32): Index number of the selected object
- `PCallout` (Callout): Callout (see Remarks )

## Return Value

True if the callout is added to the selected object, false if not

## Remarks

Use
ISelectionMgr::CreateCallout2
to set the properties of the callout. Then use ISelectionMgr::SetCallout to add the callout to an already selected object.