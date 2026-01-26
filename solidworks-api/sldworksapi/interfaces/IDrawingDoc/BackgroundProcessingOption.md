---
type: property
interface: IDrawingDoc
member: BackgroundProcessingOption
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - background
  - processing
  - backgroundprocessingoption
  - drawing
  - doc
  - option
  - int32
  - fire
  - notifications
  - events
  - vba
  - vb
  - net
readonly: null
---

# IDrawingDoc.BackgroundProcessingOption

Gets or sets the background processing option for this drawing.

## Signature

```csharp
System.Int32 BackgroundProcessingOption {get; set;}
```
## Parameters

None.

## Return Value

Background processing option as defined in swBackgroundProcessOption_e (see Remarks )

## Remarks

SOLIDWORKS recommends that you only use this property with
ISldWorks::IsBackgroundProcessingCompleted
and
ISldWorks::EnableBackgroundProcessing
when you can quickly open a drawing document via the user interface, but that same drawing takes significantly more time to open programmatically.
To more efficiently and programmatically open a drawing document that requires a lot of CPU time and no user input:
Set ISldWorks::EnableBackgroundProcessing to true.
Use
ISldWorks Event BackgroundProcessingStartNotify
to handle the background processing start event.
Open the drawing document by calling either
ISldWorks::OpenDoc6
or
ISldWorks::OpenDoc7
.
Set IDrawingDoc::BackgroundProcessingOption to
swBackgroundProcessOption_e
.swBackgroundProcessing_DeferToApplication.
Call ISldWorks::IsBackgroundProcessingCompleted repeatedly, which polls the status of the open operation
Use
ISldWorks Event BackgroundProcessingEndNotify
to handle the background processing end event.
When the open operation is finished, set ISldWorks::EnableBackgroundProcessing to false.

## Examples

- Fire Notifications for Background Processing Events (VBA) (Fire_Notification_for_Background_Processing_Events_Example_VB.htm)
- Fire Notifications for Background Processing Events (VB.NET) (Fire_Notification_for_Background_Processing_Events_Example_VBNET.htm)
- Fire Notifications for Background Processing Events (C#) (Fire_Notification_for_Background_Processing_Events_Example_CSharp.htm)