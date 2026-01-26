---
type: method
interface: ISldWorks
member: IsBackgroundProcessingCompleted
returns: System.Boolean
parameters:
  -
    name: FilePath
    type: System.String
    description: Fully qualified path and filename of the drawing document that was opened in a background process
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - open
  - document
  - drawing
  - drawings
  - see
  - also
  - idrawingdoc
  - background
  - processing
  - isbackgroundprocessingcompleted
  - isldworks
  - sld
  - works
  - completed
  - file
  - path
  - string
  - boolean
---

# ISldWorks.IsBackgroundProcessingCompleted

Gets whether SOLIDWORKS has finished background processing a drawing document that requires a lot of CPU time to open.

## Signature

```csharp
System.Boolean IsBackgroundProcessingCompleted( 
   System.String
FilePath
)
```
## Parameters

- `FilePath` (System.String): Fully qualified path and filename of the drawing document that was opened in a background process

## Return Value

True if background processing is finished, false if not

## Remarks

SOLIDWORKS recommends that you only use this method with
ISldWorks::EnableBackgroundProcessing
and
IDrawingDoc::BackgroundProcessingOption
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
Call ISldWorks::IsBackgroundProcessingCompleted repeatedly, which polls the status of the open operation, to know when background processing ends.
Use
ISldWorks Event BackgroundProcessingEndNotify
to handle the background processing end event.
When the open operation is finished, set ISldWorks::EnableBackgroundProcessing to false.