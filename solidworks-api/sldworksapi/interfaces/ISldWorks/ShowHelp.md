---
type: method
interface: ISldWorks
member: ShowHelp
returns: void
parameters:
  -
    name: HelpFile
    type: System.String
    description: Name of the Help file that contains the Help topic
  -
    name: HelpTopic
    type: System.Int32
    description: ID of Help topic to display
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CallBack
  - ISldWorks.RemoveCallback
  - ISldWorks.SetAddinCallbackInfo
keywords:
  - help
  - show
  - topic
  - showhelp
  - isldworks
  - sld
  - works
  - file
  - string
  - int32
  - void
---

# ISldWorks.ShowHelp

Displays the specified Help topic.

## Signature

```csharp
void ShowHelp( 
   System.String
HelpFile
,
   System.Int32
HelpTopic
)
```
## Parameters

- `HelpFile` (System.String): Name of the Help file that contains the Help topic
- `HelpTopic` (System.Int32): ID of Help topic to display

## Return Value

Unknown.

## Remarks

You can use this method with
ISldWorks::AddCallback
to implement Interactive What's New for your add-in.

## See Also

- `ISldWorks.CallBack`
- `ISldWorks.RemoveCallback`
- `ISldWorks.SetAddinCallbackInfo`